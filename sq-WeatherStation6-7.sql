/*Weather station 6 */

SELECT  DISTINCT city 
FROM station
WHERE (
INSTR(city,'a') = 1 ||
INSTR(city,'e') = 1 ||
INSTR(city,'i') = 1 ||
INSTR(city,'o') = 1 ||
INSTR(city,'u') = 1 )
;
SELECT  DISTINCT city 
FROM station
WHERE (
INSTR(reverse(city),'a') = 1 ||
INSTR(reverse(city),'e') = 1 ||
INSTR(reverse(city),'i') = 1 ||
INSTR(reverse(city),'o') = 1 ||
INSTR(reverse(city),'u') = 1 )
;
