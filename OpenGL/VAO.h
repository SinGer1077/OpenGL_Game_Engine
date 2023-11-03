#ifndef VAO_H
#define VAO_H

#include <string>
#include <iostream>

#include <GL/glew.h>

class VAO
{
public:
	GLuint vao;
	VAO() {
		glGenVertexArrays(1, &vao);
		glBindVertexArray(vao);
	}

	void Bind() {
		glBindVertexArray(vao);
	}
};

#endif

