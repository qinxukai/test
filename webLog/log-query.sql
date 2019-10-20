SELECT
	url,
	referrer,
	count(*)
FROM
	log
WHERE
	url != '/favicon.ico'
AND referrer != ''
AND referrer != 'blank'
AND referrer NOT LIKE '%baidu.com%'
AND referrer NOT LIKE '%sogou.com%'
AND referrer NOT LIKE '%so.com%'
AND referrer NOT LIKE '%so.m.sm.cn%'
AND referrer NOT LIKE '%milu.com%'
AND referrer NOT LIKE '%9917wan.com%'
AND referrer NOT LIKE '%/topic/%'
AND referrer NOT LIKE '%://985%'
AND referrer NOT LIKE '%://9917%'
AND referrer NOT LIKE '%://9917yx%'
GROUP BY
	referrer
ORDER BY
	count(*) DESC