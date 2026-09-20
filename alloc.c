#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <stddef.h>

double standard_deviation(int *numbers, size_t capacity)
{
    // Handle edge cases
    if (capacity == 0 || numbers == NULL) {
        return 0.0;
    }
    
    // Calculate the mean
    double sum = 0.0;
    for (size_t i = 0; i < capacity; i++) {
        sum += numbers[i];
    }
    double mean = sum / capacity;
    
    // Calculate the sum of squared differences from the mean
    double squared_diff_sum = 0.0;
    for (size_t i = 0; i < capacity; i++) {
        double diff = numbers[i] - mean;
        squared_diff_sum += diff * diff;
    }
    
    // Calculate variance (population variance)
    double variance = squared_diff_sum / capacity;
    
    // Standard deviation is the square root of variance
    return sqrt(variance);
}

void WriteStandardDeviation(int *numbers, size_t capacity) {
    size_t count = 0;    // Number of elements stored

    // Allocate initial memory block
    
    if (numbers == NULL) {
        fprintf(stderr, "Memory allocation failed!\n");
    }

    printf("Enter integers (enter any letter to stop):\n");

    int value;
    // scanf returns 1 if an integer was successfully read.
    // Entering a letter causes scanf to return 0 and break the loop.
    while (scanf("%d", &value) == 1) {
        // If the array is full, double its capacity
        if (count == capacity) {
            size_t new_capacity = capacity * 2;
            int *temp = realloc(numbers, new_capacity * sizeof(int));

            if (temp == NULL) {
                fprintf(stderr, "Memory reallocation failed!\n");
                free(numbers); // Free existing memory before exiting
                return;
            }

            numbers = temp;
            capacity = new_capacity;
        }

        numbers[count] = value;
        count++;
    }

    // Print out the stored numbers
    printf("\nYou entered %zu number(s):\n", count);
    for (size_t i = 0; i < count; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    printf("Standard Deviation: %.2f\n", standard_deviation(numbers, count));
}
int main(void) {
    size_t capacity = 4; // Initial capacity
    int* numbers = malloc(capacity * sizeof(int));
    if (numbers == NULL) {
        fprintf(stderr, "Memory allocation failed!\n");
        return 1;
    }
    WriteStandardDeviation(numbers, capacity);
    // Free allocated memory
    free(numbers);
    numbers = NULL;

    return 0;
}