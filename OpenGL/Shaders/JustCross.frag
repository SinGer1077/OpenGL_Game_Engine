#version 460 core

in vec2 fragCoord;
out vec4 color;

void main(){
	vec2 st = fragCoord.xy + vec2(0.5, 0.5);  
    vec3 c = vec3(smoothstep(0.4, 0.5, st.x) 
        * 1.0-smoothstep(0.5, 0.6, st.x));
    c += vec3(smoothstep(0.4, 0.5, st.y) 
        * 1.0-smoothstep(0.5, 0.6, st.y));
    color = vec4(c, 1.0);
}