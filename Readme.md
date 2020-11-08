# Application Overview
## User Mode
- /dashboard - Shows the list of all the user metrics and charts for the selected time interval 
- /compare -  Comapres the selected metrics for the selected interval
- /release - Displays the info of latest release
- Eva, integrated intelligent assistant answers all user's queries realted to dashboard and creates alert, sends reports
## Admin mode
- /admin 
    - Creates a message and sends data to the kain service to schedule it to be sent 
    - Shows the status of all the messages sent so far
    - Displays the list of users 
    - Displays the audit of logs of all the alerts created by users recently

# Tech Stack and Servies
   - [next.js](https://nextjs.org/)
   - kain -  backend service for scheduling and all CRUD
   - Eva - web chat service




