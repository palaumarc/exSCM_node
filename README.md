## Synopsis

Simple weather forecast comparator between different towns in Catalonia using a fix dataset.

This guide has only been tested in a Ubuntu 14.04 LTS x64 environment.


## Installation

It is necessary to install NodeJS. To do it, we will use NVM (Node Version Manager).

    $ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash

Close the terminal and reopen it again. Now let's install NodeJS 5.7 version and set it as default
    
    $ nvm install 5.7
    $ nvm alias default 5.7

NOTE: v5.7 is the only one that has been tested. Using other versions may lead to undefined behaviours

Now, install back-end dependencies. From the root directory execute:

    $ npm install

After that, install front-end dependencies. To do it we will use Bower, which will install dependencies in "bower_components" directory.

    $ cd static
    $ npm install -g bower
    $ bower install

## Service execution

In order to start the server, execute this from root folder. It will start the server, running on 8080 port.

    $ npm start

After that, you can navigate to http://localhost:8080 and use the application