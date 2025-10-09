# break-the-ceiling 
break-the-ceiling is my personal project that explores various programming topics, primarily in Java, to help me further enhance my coding skills.

# md-renderer
This project involves reading .md files and displaying each file on a separate page on the web.

## tech stack
<ul>
<li>Java 21</li>
<li> Maven 3.9.9</li>
<li> Vue 3.2.13</li>
</ul>

## run config (vm options)
<ul>
<li>-Dmarkdown.folder=C:\Dev\Workspace\personal_projects\markdown_parser\server\src\main\resources</li>
<li>-Dresource.dir=C:\Dev\Workspace\personal_projects\markdown_parser\ui\dist </li>
</ul>

## caution
When I was building the ui module using **vue cli**, it created additional git within the ui module which caused a mess with branches as git recognised two modules (server and ui) to be on separate branches. Hence, it's important to remove git in the ui module after using vue cli.