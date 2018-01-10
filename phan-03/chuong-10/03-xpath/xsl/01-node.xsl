<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- 
    Dấu //: Truy xuất đến bất kỳ phần tử nào nằm trong tập tin xml mà ko cần đi theo đúng đường dẫn, 
                thêm node vào phía sau dấu // (Vd: select="//book").
    Dấu . : Lấy toàn bộ giá trị của node hiện thời.
    Dấu ..: Láy toàn bộ các giá trị nằm trong phần tử cha.
    Dấu @ : Kết hợp với dấu . để lấy giá trị của thuộc tính.
 -->

<xsl:template match="/">
    <html>
    <head>
        <title>XPATH Tutorial</title>
    </head>
    <body>
        <h1>Node in XPath</h1>        
        <!-- <div>
            <xsl:value-of select="//title"/>
            <br />
            <xsl:value-of select="book-shop/book/title"/>
        </div> -->

        <!-- <div>
            <xsl:for-each select="book-shop/book/shipping">
                <xsl:value-of select=".."/> <br />
            </xsl:for-each>
        </div> -->

        <div>
            <xsl:for-each select="book-shop/book/@id">
                <xsl:value-of select="."/> <br />
            </xsl:for-each>
        </div>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>