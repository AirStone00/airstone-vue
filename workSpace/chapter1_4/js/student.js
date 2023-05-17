export function Student(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.learning = function () {
        return '我正在学习jQuery';
    }
}
