#version 460 core

in vec2 fragCoord;
out vec4 color;

uniform float u_time;

float HexDist(vec2 st){
    st = abs(st);
    float c = dot(st, normalize(vec2(1., 1.73)));
    c = max(c, st.x);
    return c;
}

vec4 HexCoords(vec2 st){
    vec2 r = vec2(1, 1.73);
    vec2 h = r * 0.5;
    vec2 a = mod(st, r) - h;
    vec2 b = mod(st - h, r) - h;
    vec2 gv;
    if (length(a) < length(b)){
        gv = a;
    }
    else{
        gv = b;
    }
    float x = atan(gv.x, gv.y);
    float y = 0.5 - HexDist(gv);
    vec2 id = st-gv;

    return vec4(x, y, id.x, id.y);
}

void main()
{
    //vec2 st = (fragCoord.xy * 2.0 - vec2(800, 600)) / 800;  
    vec2 st = fragCoord.xy;
    vec2 st0 = st;
    vec3 finalColor = vec3(0.4118, 0.1451, 0.1451);   
    vec3 background = vec3(1.0, 1.0, 1.0); 

    st *= 5.;    

    vec4 hc = HexCoords(st);
    hc.y *= 0.5; 
    float c = smoothstep(0.0, .01, hc.y);       
    if ( hc.y * sin(hc.z * hc.w) > 0.01)  
        c -= 0.97;  
    else
        c -= .94;

    if (c > -0.0)
        finalColor = vec3(0.0588, 0.0706, 0.6941);   
    else{
        float distance = length(st) * exp(-length(st));   
        distance = sin(distance * 8.0 + u_time * 4.0) / 50.0;
        distance = pow(0.01 / distance, 2.0);
        finalColor *= distance * vec3(0.8706, 0.0471, 0.9451) ; 
    }

    finalColor +=c;

    color = vec4(finalColor, 0.0f);
}