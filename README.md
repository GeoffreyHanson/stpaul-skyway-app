# St. Paul Skyway Map

Visitors, residents and workers have long suffered from a skyway navigation system that causes more confusion than solutions. Existing systems rely on static maps that are often outdated, inconsistent and generally unhelpful. The current system is not widely accessible, and we want as many people as possible to be able to easily enjoy the cultural amenities, employment opportunities and everything else that is housed within Downtown Saint Paul's skyway system.

## Live Demo

Visit https://stpaul-skyway.netlify.app/

## Installation

1. Clone this repository
2. Clone into folder of your choice
3. To access cloned repository type `cd stpaul-skyway-app` in command line
4. Type `yarn install` in command line to install necessary packages
5. The Google Maps API and Google Sheets API each requires a key which you can obtain from here [Google Maps](https://developers.google.com/maps/documentation/javascript/overview) [Google Sheets](https://developers.google.com/sheets/api)
6. Create a file called ".env" outside of src folder.
7. Add Google Maps API key as variable to the .env file as such REACT_APP_GOOGLE_API_KEY="<yourKey>".
8. Type `yarn start` to run the application

## Features

Users are able to:

- View a dynamic map of the Skyway
- Report concerns to the city
- Filter for Food & Coffee, Services, Retail, and Entertainment found in the Skyway
- Find entrances/exits to the Skyway

Future Implementations

- Interface with passport parking app
- Emergency response

## Technology Used

- React.js
- KML
- Material-UI
- Google Maps API

## Contributions

#### Authors

- Geoffrey Hanson - [GitHub](https://github.com/GeoffreyHanson)
- Matthew Sedlacek - [GitHub](https://github.com/matthewsedlacek)
- Gus Murphy - [GitHub](https://github.com/gusbmurphy)

#### UX/UI Designers

- Joey Pearlman - [LinkedIn](https://www.linkedin.com/in/joeypearlman/)

## Licensing

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
For a copy of the GNU General Public License along write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
