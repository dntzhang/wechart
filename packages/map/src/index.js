import cax from 'cax'

class Map extends cax.Group {
  constructor(data) {
      super()
      const shapes = data.shapes
      Object.keys(shapes).forEach(key => {
          var p = new cax.Path(shapes[key])
          this.add(p)
      })
  }
}

export default Map