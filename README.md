# Discord_bot_for_cybersecurity_news
n8n automation system that share on a Schedule cybersecurity news through a Discord bot. showing an Excel sheet of the cybersecurity news of the last days   

## Features
-ranking system that Decides how serious is the news choose between three ranks [critical, important, less important] according to algorithm that sees how many times did this news appeared in different blogs 

-AI model that sees the sheet before publish it to generate a catchy header for the sending message 

## how it works 
1-Schedule node to put when you want the bot to send the message 

2-clear sheet node to clear the data of the previous sheet so, you can use the same sheet so, less cost and more productivity

3=the JavaScript node: the node that have the blogs data set for the RSS (the commented URLs are unstable !)

4-the RSS read node: you will pass the URL variable to it from the JS node so, it will call all the blogs links it have to scrape the news from them

5-the JavaScript node: that do the ranking system and get the top 50 

6- google sheet node: specify the colimns you need in the sheet like [title, description, URL, blog name, rank] then drag and drop the variable name from the previous node to the google sheet node

7-a JavaScript node that get the 50 input from the previous node and outputs only 1 output 

8-AI model that takes that 1 output and with the prompt (provided in the files) it generates a catchy phrase for the message to be send 

9-Discord node: using a webhock link a discord channel with n8n

## Configuration 
-link google sheet with n8n using google API key check docs for more details

-link n8n with what ever LLM u want using API from there website

--link n8n with Discord using WebHock

