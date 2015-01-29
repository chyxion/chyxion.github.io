---
title: Spring Ext Start Document
---

# Spring Ext Start
    
## I. Build Project From CLI
to be sure [`maven`](http://maven.apache.org/download.cgi) has been installed.

### Init Project
download [`launch.bat`](launch.bat) / [`launch.sh`](launch.sh) and [`settings.xml`](settings.xml) to your directory, open terminal there.

On Windows

    ~ launch <groupId> <artifactId>

Or Linux/Unix

    ~ ./launch.sh <groupId> <artifactId>

![](images/launch-cli-01.png)

It takes few minutes, please be patient, if errors caused, please try again, it most likely is network error.

![](images/launch-cli-02.png)

### Run Project
After project generate successfully, then change to the project directory, run project.

    ~ cd <artifactId>
    ~ mvn tomat7:run

![](images/launch-cli-03.png)

### Open Browser
    http://localhost:8080

## II. Build Project By Eclipse

### Add Archetype

#### Menu -&gt; Preferences
![](images/add-archetype-01.png)

#### Maven -&gt; Archetypes -&gt; Add Remote Catalog...
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

### Open Browser `http://localhost:8080`
![](images/open-browser.png)

### Setup Database Configuration
![](images/database-config.png)

You need create the database you configured.

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
In `pom.xml` there are 3 profiles [dev, sit, prod], each profile has different configurations, you may use `mvn -p prod` to switch to `prod` profile.

## III. Custom Project

### I. Custom JSON Response
Implement `me.chyxion.spring.ext.DataModelAssembler` and register Spring bean.

### II. Custom Data Model ID
Implement `me.chyxion.spring.ext.IdGenerator` and register Spring bean.

### III. Custom View Resolver
Register your view resolver bean with order less than 16.

## IV. Contacts

chyxion@163.com
