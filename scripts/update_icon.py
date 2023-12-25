import argparse
import bs4
import re
import logging
import requests
import os

from typing import Tuple, List


DEFAULT_FONTAWESOME_VERSION = "v6.5.1"
DEFAULT_BASE_URL = (
    "https://site-assets.fontawesome.com/releases/%s/svgs/brands/"
    % DEFAULT_FONTAWESOME_VERSION
    + "%s.svg"
)
DEFAULT_BASE_PATH = os.path.join(os.getcwd(), "..")
DEFAULT_ICON_PATH = os.path.join(
    DEFAULT_BASE_PATH,
    "assets",
    "icons",
)
DEFAULT_SVG_ATTR = {"fill": "currentColor"}
DEFAULT_ICON_DOCS = os.path.join(
    DEFAULT_BASE_PATH, "exampleSite", "content", "samples", "icons"
)
DEFAULT_TABLE_DELIMITER = "| -------------------- | --------------------------------- |"


def download_icon(download_url: str) -> None:
    """Downloads the icon based on the URL"""
    with requests.Session() as s:
        return s.get(download_url).content


def update_svg_to_theme(svg: bytes) -> bytes:
    """Update the current color of SVG to match theme"""
    soup = bs4.BeautifulSoup(svg, features="html.parser")

    # Update attrs
    svg_elem = soup.find("svg").find("path")
    for k, v in DEFAULT_SVG_ATTR.items():
        svg_elem[k] = v

    # Remove comments
    return re.sub(r"<!.*?->", "", str(soup))


def update_docs(icon_name: str) -> None:
    """Update icon to docs"""
    files = get_folder_md(DEFAULT_ICON_DOCS)
    for file in files:
        # Parse Table
        logging.debug(f"reading {file}")
        with open(file) as f:
            file_data = f.read()
        table_fmt, table = parse_table(file_data)
        table.append(str(table[0]).replace("amazon", icon_name))

        # Write Doc
        print(table_fmt)
        with open(file, "w") as f:
            f.write(
                "\n".join(
                    (
                        table_fmt,
                        DEFAULT_TABLE_DELIMITER,
                        "\n".join(sorted(table)),
                    )
                )
            )


def get_folder_md(dir_path: str) -> List[str]:
    return list(
        map(
            lambda path: os.path.join(dir_path, path),
            filter(lambda x: x.endswith(".md"), os.listdir(dir_path)),
        )
    )


def parse_table(table_str: str) -> Tuple[str, List[str]]:
    """Parse the table to a list of (article_fmt, (icon_name, icon_shortcode))"""
    headers, table = table_str.split(DEFAULT_TABLE_DELIMITER)
    return headers.strip(), list(
        filter(
            lambda x: len(x.strip()) > 0,
            map(
                lambda x: x.strip(),
                table.split("\n"),
            ),
        )
    )


def save_file(name: str, svg: str) -> None:
    file_name = f"{name}.svg"
    logging.debug(f"saving icon to {file_name}")
    with open(
        os.path.join(
            DEFAULT_ICON_PATH,
            file_name,
        ),
        "w",
    ) as file:
        file.write(svg)


def parse_args() -> Tuple[str, str, int]:
    """
    Parse arguments.
    Returns the following:
    1. Icon URL: str
    2. Icon Representation :str
    3. Log Level: int
    """
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-v",
        "--verbose",
        help="show debug messages during script execution",
        required=False,
        default=False,
        action="store_true",
    )

    parser.add_argument(
        "-u",
        "--url",
        help="full url of the icon svg, defaults to fortawesome url",
        required=False,
        nargs=1,
    )

    parser.add_argument(
        "name",
        help="name of the icon to be added. EG: `github`",
    )

    parse_res = parser.parse_args()
    url = DEFAULT_BASE_URL % parse_res.name
    if parse_res.url is not None:
        if len(parse_res.url) != 1:
            raise ValueError("Invalid URL arguments. Use -h for help.")
        url = parse_res.url[0]

    log_level = logging.DEBUG if parse_res.verbose else logging.INFO
    return url, parse_res.name, log_level


if __name__ == "__main__":
    icon_url, icon_name, log_level = parse_args()

    # Setup logging
    logging.basicConfig(
        level=log_level,
        format="%(asctime)s.%(msecs)03d %(levelname)s %(module)s - %(funcName)s: %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    logging.debug(f"Using default base URL: {DEFAULT_BASE_URL}")
    logging.info(f"Using Log Level: {logging.getLevelName(log_level)}")
    logging.info(f"Using URL: {icon_url}")
    logging.info(f"Using Icon Name: {icon_name}")

    # Download Icon
    logging.debug(f"fetching icon at {icon_url}")
    svg_content = download_icon(icon_url)

    # Patch svg attrs
    logging.debug(f"updating svg attrs")
    final_svg = update_svg_to_theme(svg_content)

    # Save file
    logging.debug("saving icon to assets")
    save_file(icon_name, final_svg)

    # Write to docs (TODO)
    logging.debug("updating")
    update_docs(icon_name)

    logging.info("done!")
