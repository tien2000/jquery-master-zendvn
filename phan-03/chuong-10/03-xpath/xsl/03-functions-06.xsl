<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <head>
        <title>XPATH Tutorial</title>
    </head>
    <body>
        <h1>Node in XPath</h1>
        <div>
            <!--
                count(): Đếm.
                sum(): Tính tổng.
            -->
            Tính phí vận chuyển sách đến US, EU, VN.
        </div>
        <hr />
        <div>
            Số cuốn sách: <xsl:value-of select="count(book-shop/book)"/> <br />
            Tổng tiền: <xsl:value-of select="sum(book-shop/book/price/sale-off)"/> <br />
        </div>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>