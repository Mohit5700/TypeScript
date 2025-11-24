import { Delete } from "lucide-react";
import { Button } from "./button";
import { Card, CardHeader, CardTitle } from "./card";

type TodoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div className="grid md:grid-cols-5 gap-3 mt-5">
      {props.items.map((todo) => (
        <Card key={todo.id}>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>{todo.text}</CardTitle>
            <Button
              onClick={() => props.onRemoveTodo(todo.id)}
              variant={"destructive"}
              size={"icon"}
            >
              <Delete />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
