import React from 'react';
import { Button, Form } from 'react-bootstrap';

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<Form onSubmit={handleSubmit}>
            <div class="row">

			<Form.Group className='col-md-8'>
				<Form.Label><b>Add Todo</b></Form.Label>
				<Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
			</Form.Group>
            <Form.Group className='col-md-4'>
                <Button variant="primary mt-4" type="submit">
                    Submit
                </Button>
            </Form.Group>
            </div>
		</Form>
	);
}

export default FormTodo;
