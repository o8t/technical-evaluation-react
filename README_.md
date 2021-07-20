Clown Tracker

1.Pre-Requirement
Set up the node js environment based on the OS.

2.Installation

Download and unzip the client side folder: ClownViewer and the nodejs server folder ClownPortal
To run the nodejs server, run the command npm “start” inside the folder ClownPortal
To run the client page, run the command npm “start” inside the folder “ClownViewer” or double click the “LoginPage.html”file.

3.Design Details

3.1 Web page implementation

All the logics are written in typescript and pure javascript is used.

In order to see the list of clowns, please use the following credentials in the login page:
User name: admin and password: admin

3.2 Nodejs server

Packages used: Express, multer inorder to effectively store images
Entire log is written in typescript

Api for addition, deletion and searching of clowns also added for future use.
Api for uploading images is also implemented.
The server is listening on port 3500.
