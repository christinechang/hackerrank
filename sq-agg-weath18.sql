SELECT ROUND((c-a) + (d-b),4)
FROM 
(SELECT MIN(lat_n) AS a, MAX(lat_N) AS b, MIN(long_w) AS c, MAX(long_w) AS d
FROM station) as derTab
;
