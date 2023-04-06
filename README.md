# login2explore_micro_project
Project Management Form that will store data in PROJECT-TABLE relation of COLLEGE-DB database
# Project Management Form
## Description 
This is a web based html form for project management in collage  using JsonPowerDB as Database 
JsonPowerDB is used to perform CURD operation 


# Benefits of using JsonPowerDB
* Simple to use , real time database
* Simplest way to retrieve data in a JSON format.
* Backends code is not required for database 
* No need for defining schema 
* Querying the database is easy there is no need  of knowledge of SQL commands

# TECH STACK USED
* HTML
* CSS
* JAVASCRIPT 
* JsonPowerDB ( As Database)

# Screenshots:
<img src="/images/Screenshot (119).png">
<img src="./images/Screenshot (121).png">

# Illustrations:
* **UPDATE** : when projecct id  is already present in database then project information is fetched from database and filled in respective feild then user can UPDATE project information 
* **SAVE** : If project id is not existed in database then we can fill other field and save in database
* **reset** : By this we can clear all field of form and with this except first project id other field are disabled until user enter any roll number
* **Alert** : This website uses disposable Alter prompt using bootstrap

# HOW TO USE

* **Initially**
<img src="./images/Screenshot (119).png">

We need to enter a project id 



* **Fetching project data using projectid **
  If projectid already present in database, then all field filled with that project information
  
  <img src="./images/Screenshot (128).png">
  otherwise, other fields are enabled after user input roll number
  
* **Updation of student details**
  In order to update project details input projectis, and then we can update the project data
  
  <img src="./images/update_student_details.png">
  
  <img src="./images/alert_after_update.png">

* **Adding new project data**

  Enter new projectid and then all other fields are enabled and then after filling project information we can save this data into database only if input is valid
  
  <img src="./images/Screenshot (130).png">
  
  
 * **If input data is not valid**
 
   <img src="./images/Screenshot (133).png">
  
  

    
  
  # Installation
  
  Make a folder in your system and clone the project using git bash then open the project in Visual Studio Code or any IDE you prefer.
  ##### Clone the project 
  ```
  git clone
  ```
  After cloning 
  
  Move to **index.html** and then **javascript** folder and in **index.js** file replace the **connectionToken** by with your Connection Token
  
  # Sources
  * Introduction to JsonPowerDB - V2.0 course  on https://careers.login2explore.com/
  * [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 
  

  # Demo
  
  
  

  --------------------
## Hope You Like the Project ❤️❤️❤️
## Peace to everyone 🙏🏻
