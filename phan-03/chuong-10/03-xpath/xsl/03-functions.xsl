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
            <!-- > < >=  <= == != -->: Biểu thức so sánh.
        </div>
        <div>
            <xsl:for-each select="//book[price/real &gt; price/sale-off]">
                <xsl:value-of select="title"/> <br />
            </xsl:for-each>
        </div>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>