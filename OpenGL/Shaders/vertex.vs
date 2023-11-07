#version 460 core
layout (location = 0) in vec3 position; 
layout (location = 1) in vec3 normal;   

out vec3 Normal;
out vec2 fragCoord;
out vec3 FragPos;
out vec3 LightPos;

uniform mat4 transform;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform vec3 lightPos;

void main()
{    
    gl_Position = projection * view * model * transform * vec4(position, 1.0);    
    fragCoord = gl_Position.xy;
    //Normal = normal;
    Normal = mat3(transpose(inverse(model * transform))) * normal;
    FragPos = vec3(transform * model * vec4(position, 1.0f));
    //LightPos = vec3(view * vec4(lightPos, 1.0f));
}   