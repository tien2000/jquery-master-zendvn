<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- 
    for-each select="book": Vòng lặp.
    sort select="weight" order="descending" data-type="number": Sắp xếp theo chiều giảm dần của weight.
 -->

<xsl:template match="book_shop">
    <html>
    <head>
        <title>XSL Tutorial</title>
    </head>
    <body>
        <h1>Lập trình jQuery</h1>
        <xsl:apply-templates />
    </body>
    </html>
</xsl:template>

<xsl:template match="book">
    <ul>
        <li>Tên Khóa học: <xsl:value-of select="title"/></li>
        <li>Tác giả: <xsl:value-of select="author"/></li>
        <li>Số trang: <xsl:value-of select="pages"/></li>            
        <li>
            Khổi lượng: <xsl:value-of select="weight"/>
                        <xsl:value-of select="weight/@units"/>
        </li>
        <li>==========================</li>
    </ul>
</xsl:template>

</xsl:stylesheet>