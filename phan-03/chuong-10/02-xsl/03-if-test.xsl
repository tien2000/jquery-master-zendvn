<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- 
    test="book/weight &gt; 500": Ý nghĩa Nếu khổi lượng lớn hơn 500 thì hiển thị ra.
 -->

<xsl:template match="book">
    <html>
    <head>
        <title>XSL Tutorial</title>
    </head>
    <body>
        <h1>Lập trình jQuery</h1>
        <ul>
            <li>Tên Khóa học: <xsl:value-of select="title"/></li>
            <li>Tác giả: <xsl:value-of select="author"/></li>
            <li>Số trang: <xsl:value-of select="pages"/></li>
            <xsl:if test="weight &lt; 500">
                <li>
                    Khổi lượng: <xsl:value-of select="weight"/>
                                <xsl:value-of select="weight/@units"/>
                </li>
            </xsl:if>
        </ul>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>