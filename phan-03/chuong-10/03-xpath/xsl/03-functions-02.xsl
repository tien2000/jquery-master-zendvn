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
            <!-- + - * /(dấu chia ký hiệu "div") -->
            Tính phí vận chuyển sách đến US, EU, VN.
        </div>
        <hr />
        <div>
            <xsl:for-each select="//book">
            <h3>
                <xsl:value-of select="title"/> <br />
                <xsl:value-of select="weight"/> <br />
                <xsl:value-of select="weight/@units"/> <br />
            </h3>
            US: (<xsl:value-of select="shipping/US"/>):
                    <xsl:value-of select="(weight div 100) * shipping/US"/> <br />
            EU: (<xsl:value-of select="shipping/EU"/>)
                    <xsl:value-of select="(weight div 100) * shipping/EU"/> <br />
            VN: (<xsl:value-of select="shipping/VN"/>)
                    <xsl:value-of select="(weight div 100) * shipping/VN"/> <br />
            <br />==================================                
            </xsl:for-each>
        </div>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>