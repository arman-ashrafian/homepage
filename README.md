# My Homepage

I made this to get familiar with Vue JS. They are four main components; clock, stocks, calender, and journal. The cool part is the calender and journals. When I click a date on the calender a textarea pops up and I can write a journal. When I hit save it will create a text file with the date as the name and save it to Google Drive. 

Most of the interesting code is in [frontend/src/components](frontend/src/components)

[server.go](server.go) is pretty simple and is mostly just dealing with the Google Drive API

## Screenshots
![Screenshot1](https://github.com/arman-ashrafian/my-homepage/blob/master/screenshots/homepage-sc-1.PNG "Homepage")
![Screenshot2](https://github.com/arman-ashrafian/my-homepage/blob/master/screenshots/homepage-sc-2.PNG "Homepage")

## Todo
- remove google login link and just redirect to the the google login if the user trys accesing journal without being logged in.
- figure out the best naming scheme for files
- add weather component
- ability to change month
- highlight all days on calender that have a journal entry
