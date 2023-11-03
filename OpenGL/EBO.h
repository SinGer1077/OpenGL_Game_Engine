#ifndef EBO_H
#define EBO_H

#include <string>
#include <iostream>

#include <GL/glew.h>

class EBO
{
public:
	GLuint ebo;
	EBO(GLuint indices[], GLint size, GLenum target, GLenum usage) {
		glGenBuffers(1, &ebo);
		glBindBuffer(target, ebo);
		glBufferData(target, size, indices, usage);
	}
};

#endif

