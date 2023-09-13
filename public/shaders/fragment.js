const fragmentShader = `
uniform float time;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vColor;
float PI = 3.141592653589793238;

void main() {
  // vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
  gl_FragColor = vec4(vUv, 0.0, 1.0);
  gl_FragColor = vec4(vColor, 1.0);
}
`

export default fragmentShader;
