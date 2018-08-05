
var genVxNormal = (geo) => {
  var vxNormals = [],
    mp = {a: 0, b: 1, c: 2}
  geo.faces.forEach(face => {
    Object.keys(mp).forEach(k => {
      vxNormals[face[k]] = face.vertexNormals[mp[k]]
    })
  })
  return vxNormals
}

export default class FrequencyMesh extends THREE.Group {
  constructor (geo, mat) {
    super()
    this.mesh = new THREE.Mesh(geo, mat)
    this.positions = geo.vertices.map(p => p.clone())
    this.offsets = geo.vertices.map(() => Math.random() * 8)
    this.vxNormals = genVxNormal(geo)
    this.add(this.mesh)
  }
  update (frequencyData, frequencyBinCount, n = 1) {
    this.positions.forEach((v, i) => {
      var val = frequencyData[i / this.positions.length * frequencyBinCount | 0] / 128
      this.mesh.geometry.vertices[i].copy(
        v.clone().add(this.vxNormals[i].clone().multiplyScalar(val * n))
      )
    })
    this.mesh.geometry.verticesNeedUpdate = true
  }
}
