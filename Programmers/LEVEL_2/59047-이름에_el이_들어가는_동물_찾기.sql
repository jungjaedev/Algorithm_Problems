-- 이름에 'el'이 들어가는 dog 찾기

SELECT ANIMAL_ID, NAME 
FROM ANIMAL_INS 
WHERE NAME LIKE '%EL%' AND ANIMAL_TYPE = 'Dog' 
ORDER BY NAME