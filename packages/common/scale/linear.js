class ScaleLinear {
    constructor(domain, range) {


        this.domainFrom = domain[0]
        this.domainTo = domain[1]
        this.domainInterval = this.domainTo - this.domainFrom


        this.rangeFrom = range[0]
        this.rangeTo = range[1]
        this.rangeInterval = this.rangeTo - this.rangeFrom
    }

    calculate(value) {
        return this.rangeFrom + (value - this.domainFrom) / this.domainInterval * this.rangeInterval
    }

    invert(value) {
    
        return this.domainFrom + (value - this.rangeFrom) / this.rangeInterval * this.domainInterval
    }
}

export function scaleLinear(domain, range) {
    const instance = new ScaleLinear(domain, range)

    const calculate = function (v) {
        return instance.calculate(v)
    }

    calculate.invert = instance.invert.bind(instance)


    return calculate

}