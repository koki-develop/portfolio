[![Zenn Likes](https://badgen.org/img/zenn/kou_pg_0131/likes?style=plastic)](https://zenn.dev/kou_pg_0131)
[![Qiita Contributions](https://badgen.org/img/qiita/koki_develop/contributions?style=plastic)](https://qiita.com/koki_develop)

# Overview

<p>
<%= config.user.description %>
</p>

## Socials

<% Object.values(config.socials).forEach(function (social) { -%>
[<img src="./public<%= social.imageSrc %>" width="40" height="40" />](<%= social.url %>)
<% }) -%>

## Skills

<% config.skillGroups.forEach(function (skillGroup) { -%>
<% skillGroup.skills.forEach(function (skill) { -%>
[<img src="./public<%= skill.imageSrc %>" width="40" height="40" />](<%= skill.url %>)
<% }) -%>
<% }) -%>

## Works

<% config.workGroups.forEach(function (workGroup) { -%>
### <%= workGroup.name %>

| Name | Repository |
| --- | --- |
<% workGroup.works.forEach(function (work) { -%>
| <% if (work.url) { -%><a href="<%= work.url %>"><%= work.name -%></a><% } else { -%><%= work.name -%><% } -%> | <a href="https://github.com/koki-develop/<%= work.repository %>">koki-develop/<%= work.repository -%></a> |
<% }) -%>
<% }) -%>

## Contact

<% Object.values(config.socials).forEach(function (social) { -%>
[<img src="./public<%= social.imageSrc %>" width="40" height="40" />](<%= social.url %>)
<% }) -%>

[<%= config.user.email %>](mailto:<%= config.user.email %>)
