#ifndef VBO_H
#define VBO_H

#include <string>
#include <iostream>

#include <GL/glew.h>


class VBO
{
public:
	GLuint vbo;
	VBO(GLfloat vertices[], GLint size, GLenum target, GLenum usage) {		
		glGenBuffers(1, &vbo);
		glBindBuffer(target, vbo);
		glBufferData(target, size, vertices, usage);
	}
};


#endif
