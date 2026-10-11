#include <stdio.h>
#include <stdlib.h>
void WriteReverse(char *text,int length) {
    printf("Reversed text: ");
    for (int i = length - 1; i >= 0; i--) {
        putchar(text[i]);
    }
    putchar('\n');
}
void WriteText(char *text, size_t capacity) {
    size_t count = 0; // Number of characters stored

    printf("Enter text (enter a newline to stop):\n");

    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF) {
        // If the array is full, double its capacity
        if (count == capacity) {
            size_t new_capacity = capacity * 2;
            char *temp = realloc(text, new_capacity * sizeof(char));

            if (temp == NULL) {
                fprintf(stderr, "Memory reallocation failed!\n");
                free(text); // Free existing memory before exiting
                return;
            }

            text = temp;
            capacity = new_capacity; // Update capacity after successful reallocation
        }

        text[count++] = (char)ch; // Store the character and increment count
    }

    text[count] = '\0'; // Null-terminate the string

    printf("You entered: %s\n", text);
    WriteReverse(text, count);
}
int main(){
    size_t capacity = 4; 
    char *text = (char *)malloc(capacity * sizeof(char));
    if (text == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        return 1;
    }
    WriteText(text, capacity);
    free(text);
    return 0;
}