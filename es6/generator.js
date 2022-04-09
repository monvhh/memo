function example() {
    var _context = {};
    _context.curr = _context.next = 0;
    return {
        next: function () {
            switch (_context.curr = _context.next) {
                case 0:
                    _context.next = 2;
                    return {
                        value: 1,
                        done: false
                    }

                case 2:
                    _context.next = 4;
                    return {
                        value: 2,
                        done: false
                    }

                case 4:
                    _context.next = 'end';
                    return {
                        value: 3,
                        done: false
                    }

                case 6:
                case "end":
                    return {
                        value: undefined,
                        done: true
                    }
            }
        }
    }
}

var iter = example();
iter.next();