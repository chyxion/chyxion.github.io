#!/bin/bash
mvn archetype:generate -s settings.xml -DarchetypeCatalog=http://chyxion.github.io/maven/archetype-catalog.xml -DarchetypeRepository=http://chyxion.github.io/maven/ -DarchetypeGroupId=me.chyxion -DarchetypeArtifactId=spring-ext-start -DarchetypeVersion=0.0.1-RELEASE -Dversion=0.0.1-SNAPSHOT -DgroupId=%1 -DartifactId=%2
