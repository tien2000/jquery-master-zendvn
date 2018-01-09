<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- 
    match="/": Dấu "/" ý nghĩa là vào toàn bộ tập tin xml
 -->

<xsl:template match="/">
    <html>
    <head>
        <title>XSL Tutorial</title>
    </head>
    <body>
        <h1>Lập trình jQuery</h1>
        <ul>
            <li>Tên Khóa học: <xsl:value-of select="book/title"/></li>
            <li>Tác giả: <xsl:value-of select="book/author"/></li>
            <li>Số trang: <xsl:value-of select="book/pages"/></li>
            <li>
                Khổi lượng: <xsl:value-of select="book/weight"/>
                <xsl:value-of select="book/weight/@units"/>
            </li>
        </ul>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>