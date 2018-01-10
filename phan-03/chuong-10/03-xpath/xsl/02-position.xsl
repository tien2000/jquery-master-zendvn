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
        <div>
            path/book[2]: Lấy thông tin của cuốn sách có vị trí 2.
            <br />
            path/book[last() - ]: Lấy thông tin của cuốn sách có vị trí kế cuối.
            <br />
            path/book[last()]: Lấy thông tin của cuốn sách có vị trí cuối cùng.
            <br />
            path/book[@id]: Lấy thông tin các node có tồn tại thuộc tính id.
            <br />
            path/book[@id = n]: Lấy thông tin các node có tồn tại thuộc tính có giá trị n.
            <br />
            //book/title | //book/author: Lấy giá trị của title và author.
        </div>
        <hr />
        <div>
            <!-- <xsl:value-of select="book-shop/book[1]" /> <br />
            <xsl:value-of select="book-shop/book[last() - 1]" /> <br />
            <xsl:value-of select="book-shop/book[last()]" /> <br /> -->

            <!-- <xsl:for-each select="book-shop/book[@id]">
                <xsl:value-of select="title" /> <br />
            </xsl:for-each> -->

            <!-- <xsl:value-of select="book-shop/book[@id = 33]" /> <br /> -->

            <xsl:for-each select="//book/title | //book/author">
                <xsl:value-of select="." /> <br />
            </xsl:for-each>
        </div>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>