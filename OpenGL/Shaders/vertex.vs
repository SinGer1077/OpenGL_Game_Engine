#version 460 core
layout (location = 0) in vec3 position; 
layout (location = 1) in vec3 normal;   

out vec3 Normal;
out vec2 fragCoord;
out vec3 FragPos;

uniform mat4 transform;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;


void main()
{    
    gl_Position = projection * view * model * transform * vec4(position, 1.0);    
    fragCoord = gl_Position.xy;
    Normal = normal;
    FragPos = vec3(transform * model * vec4(position, 1.0f));
}   