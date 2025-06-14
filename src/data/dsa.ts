export const dsa = [
  {
    id: "dsa001",
    questionText: "What is the time complexity of inserting an element at the end of a dynamic array (ArrayList in Java, list in Python)?",
    options: [
      "O(1) amortized",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    correctAnswerIndex: 0,
    explanation: "While resizing can take O(n), it happens infrequently enough that the amortized cost is O(1)."
  },
  {
    id: "dsa002",
    questionText: "Which of the following is NOT a stable sorting algorithm?",
    options: [
      "Merge Sort",
      "Bubble Sort",
      "Quick Sort",
      "Insertion Sort"
    ],
    correctAnswerIndex: 2,
    explanation: "Quick Sort is not stable because the partitioning process can change the relative order of equal elements."
  },
  {
    id: "dsa003",
    questionText: "What data structure is typically used to implement a priority queue?",
    options: [
      "Stack",
      "Queue",
      "Heap",
      "Linked List"
    ],
    correctAnswerIndex: 2,
    explanation: "Heaps (especially binary heaps) are well-suited for priority queue operations due to their efficient insertion and extraction of the minimum/maximum element."
  },
  {
    id: "dsa004",
    questionText: "A graph where edge weights are always positive can be solved for shortest path using which algorithm?",
    options: [
      "Bellman-Ford",
      "Dijkstra's Algorithm",
      "Floyd-Warshall",
      "Kruskal's Algorithm"
    ],
    correctAnswerIndex: 1,
    explanation: "Dijkstra's algorithm is designed for graphs with non-negative edge weights. Bellman-Ford can handle negative weights (but not negative cycles)."
  },
  {
    id: "dsa005",
    questionText: "What is \\( \\sum_{i=1}^{n} i \\) ?",
    options: [
      "\\( n(n+1)/2 \\)",
      "\\( n^2 \\)",
      "\\( n(n-1)/2 \\)",
      "\\( (n+1)^2 \\)"
    ],
    correctAnswerIndex: 0,
    explanation: "This is the formula for the sum of the first n natural numbers, often proven by induction or Gauss's method."
  }
]