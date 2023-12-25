import argparse
import bs4
import re
import logging
import requests
import os

from typing import Tuple


DEFAULT_FONTAWESOME_VERSION = "v6.5.1"
DEFAULT_BASE_URL = (
    "https://site-assets.fontawesome.com/releases/%s/svgs/brands/"
    % DEFAULT_FONTAWESOME_VERSION
    + "%s.svg"
)
DEFAULT_ICON_PATH = os.path.join(
    os.getcwd(),
    "..",
    "assets",
    "icons",
)
DEFAULT_SVG_ATTR = {"fill": "currentColor"}


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
    return re.sub(r'<!.*?->','', str(soup))



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
