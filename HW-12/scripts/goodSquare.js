class GoodSquare{

    constructor(goodXCoord,goodYCoord,goodObjectHeight,goodObjectWidth, goodColor)
    {
        this.goodXCoord = goodXCoord;
        this.goodYCoord = goodYCoord;
        this.goodObjectHeight = goodObjectHeight;
        this.goodObjectWidth = goodObjectWidth;
        this.goodColor = goodColor;
    }

    get goodX()
    {
        return this.goodXCoord;
    }

    set goodX(value)
    {
        this.goodXCoord = value;
    }
    get goodY()
    {
        return this.goodYCoord;
    }
    set goodY(value)
    {
        this.goodYCoord = value;
    }

    get goodHeight()
    {
        return this.goodObjectHeight;
    }

    get goodWidth()
    {
        return this.goodObjectWidth;
    }
    get goodMainColor()
    {
        return this.goodColor;
    }
}