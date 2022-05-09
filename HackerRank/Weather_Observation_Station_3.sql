/**
 * ABOUT
 *
 * DATE: 2022-04-27
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/weather-observation-station-3/problem?isFullScreen=true
 *
 * COMMENT:
 * Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
 **/

 SELECT DISTINCT CITY
 FROM STATION
 WHERE MOD(ID, 2) = 0
 ORDER BY CITY;
