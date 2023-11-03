#version 460 core
layout (location = 0) in vec3 position; 
layout (location = 1) in vec3 color;   

out vec2 fragCoord;
uniform mat4 transform;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;


void main()
{    
    gl_Position = projection * view * model * transform * vec4(position, 1.0);    
    fragCoord = gl_Position.xy;
}   