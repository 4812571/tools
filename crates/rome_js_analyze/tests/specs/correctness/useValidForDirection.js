// invalid
for (var i = 0; i < 10; i--) {}
for (var i = 0; i <= 10; i--) {}
for (var i = 10; i > 10; i++) {}
for (var i = 10; i >= 0; i++) {}
for (var i = 0; i < 10; i -= 1) {}
for (var i = 0; i <= 10; i -= 1) {}
for (var i = 10; i > 10; i += 1) {}
for (var i = 10; i >= 0; i += 1) {}
for (var i = 0; i < 10; i += -1) {}
for (var i = 0; i <= 10; i += -1) {}
for (var i = 10; i > 10; i -= -1) {}
for (var i = 10; i >= 0; i -= -1) {}

// valid
for (var i = 0; i < 10; i++) {}
for (var i = 0; i <= 10; i++) {}
for (var i = 10; i > 0; i--) {}
for (var i = 10; i >= 0; i--) {}
for (var i = 10; i > 0; ) {}
for (var i = 10; i >= 0; ) {}
for (var i = 10; i < 0; ) {}
for (var i = 10; i <= 0; ) {}
for (var i = 10; i <= 0; j++) {}
for (var i = 10; i <= 0; j--) {}
for (var i = 10; i >= 0; j++) {}
for (var i = 10; i >= 0; j--) {}
for (var i = 10; i >= 0; j += 2) {}
for (var i = 10; i >= 0; j -= 2) {}
for (var i = 10; i >= 0; i |= 2) {}
for (var i = 10; i >= 0; i %= 2) {}
for (var i = 0; i < MAX; i += STEP_SIZE);
for (var i = 0; i < MAX; i -= STEP_SIZE);
for (var i = 10; i > 0; i += STEP_SIZE);
for (var i = 0; i !== 10; i += 1) {}
for (var i = 0; i === 10; i += 1) {}
for (var i = 0; i == 10; i += 1) {}
for (var i = 0; i != 10; i += 1) {}