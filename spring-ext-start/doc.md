# Spring Ext Start
    
## I. Build Project From CLI
To Be Sure [`Maven`](http://maven.apache.org/download.cgi) Has Been Installed.

### Init Project
Download [`launch.bat`](launch.bat) Or [`launch.sh`](launch.sh) And [`settings.xml`](settings.xml) To Your Directory, Open Terminal There.

On Windows

    ~ launch <groupId> <artifactId>

Or Linux/Unix

    ~ ./launch.sh <groupId> <artifactId>

![](images/launch-cli-01.png)

It Takes Few Minutes, Please Be Patient, If Errors Caused, 
Please Try Again, It Most Likely Is Network Error.

![](images/launch-cli-02.png)

### Runb Project
After Project Generate Successfully, Then Change To The Project Directory, Run Project.

    ~ cd <artifactId>
    ~ mvn tomat7:run

![](images/launch-cli-03.png)

### Open Browser
    http://localhost:8080

## II. Build Project By Eclipse
### Add Archetype
#### Menu -> Preferences
![](images/add-archetype-01.png)

#### Maven -> Archetypes -> Add Remote Catalog...
![](images/add-archetype-02.png)

#### Catalog File `http://chyxion.github.io/maven/archetype-catalog.xml`
![](images/add-archetype-03.png)

#### Apply Setup
![](images/add-archetype-04.png)

#### New Maven Project
![](images/new-project-01.png)

#### Next
![](images/new-project-02.png)

#### Select Archetype
![](images/new-project-03.png)

#### Specify Archetype Parameters
![](images/new-project-04.png)

#### Launch Project As Maven Build
![](images/launch-project-01.png)

#### Launch Project
![](images/launch-project-02.png)

#### Setup Goals As `tomcat7:run`
![](images/launch-project-03.png)

#### Launch Project
![](images/launch-project-04.png)

### Open Browser `http://localhost:8080`
![](images/open-browser.png)

### Setup Database Configuration
![](images/database-config.png)

You Need Create The Database You Configured.

### Open Code Gen `http://localhost:8080/codegen`
![](images/code-gen-01.png)

### Generate Code
![](images/code-gen-02.png)

Relaunch Application.

### New User
![](images/code-gen-03.png)

### Users List
![](images/code-gen-04.png)

### Code Gen Result
![](images/code-gen-result.png)

## Maven Profile
In `pom.xml` There Are 3 Profiles [dev, sit, prod], Each Profile Has Different Configurations, You May Use `mvn -P prod` to Switch to `prod` Profile.

## Custom Project
### I. Custom JSON Response
Implement `me.chyxion.spring.ext.DataModelAssembler` And Register Spring Bean.

### II. Custom Data Model ID
Implement `me.chyxion.spring.ext.IdGenerator` And Register Spring Bean.

### III. Custom View Resolver
Register Your View Resolver Bean With Order Less Than 16.

## Contacts

chyxion@163.com
