const numbers = [3,4,5];
        //--------//
        /**
         * Counts array values using a for loop
        */
        const forCount = numbersArr => {
        let sum = 0
        for (i = 0; i < numbersArr.length; i++) {
            sum += numbersArr[i]
        }
        return sum
        }

        const total = forCount(numbers)
        console.log("\nforCount total:", total, "\n\n")

        //--------//
        /**
         * Beginner reduce for couting values
        */
        console.log('START reducing')
        const reduceLog = numbers.reduce((accumulator, current, index) => { 
        console.log(`start loop ${index} | accumulator is:`, accumulator)
        console.log(`add accumulator + current (${accumulator} + ${current})`)
        return accumulator + current
        }, 0)
        console.log('FINISHED - reduceLog total:', reduceLog, "\n\n")
        
        //--------//
        /**
         * Advanced reduce for counting values
         */
         const reduceCount = numbers.reduce((acc, cur) => acc + cur)

        // Log the output
        console.log('reduceCount total:', reduceCount, "\n\n")

        //-----------------------------------------------------------------------------------------//
        // Many numbers for counting occurrences
        const manyNumbers = [1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7];

        /**
         * Count the occurrences of numbers
         */
        const reduceOccurrences = manyNumbers.reduce((acc, cur) => {
            acc[cur] ? acc[cur]++ : acc[cur] = 1
            return acc
        }, {})

        // Log the output
        console.log("reduceOccurrences:", reduceOccurrences, "\n\n")

        //--------//

        /**
         * CBeginner ount the occurrences of numbers 
         */
        const reduceOccurrencesBeginner = manyNumbers.reduce((accumulator, current, index) => {
        console.log(`loop ${index}`) 

        if (accumulator[current]) {
            console.log(`${current} exists. Incrementing count from ${accumulator[current]} to ${accumulator[current] + 1}`)
            accumulator[current]++
        } else {
            console.log(`${current} does not exist. Setting ${current}`)
            accumulator[current] = 1
        }
        return accumulator
        }, {})

        // Log the output
        console.table(reduceOccurrencesBeginner)
        //-----------------------------------------------------------------------------------------//
        
        // String for testing
        const example = "In case I don't see you, good afternoon, good evening and good night"
        
        /**
         *  Reverses a string using a for loop
         */

        const forReverse = str => {
        let newStr = ''
            for (i = str.length; i >= 0; i--) {
                newStr += str.charAt(i)
        }
        return newStr
        }

        // Run and log the output
        const forOutput = forReverse(example)
        console.log("\nforReverse:", forOutput, "\n\n")
        
        
        //--------//

        /**
         * Beginner Reverses a string using reduce 
         */
        const reduceReverseBeginner = str => {
            // Convert the string to an array
            const letters = str.split('')
        
            // Reduce the array
            //accumulator, current, index
            return letters.reduceRight((newSentence, letter, index) => {
                console.log(`Adding letter "${letter}" from index: ${index}`)
                return newSentence += letter
            }, '')
        }

        // Run and log the output - Uncomment to run
        const reduceReverseBeginnerOutput = reduceReverseBeginner(example)
        console.log("reduceReverseBeginner:", reduceReverseBeginnerOutput, "\n\n");
        
        
        
        /**
         * Reverses a string using reduce
         */
        const reduceReverse = str => {
            return str.split('').reduceRight((sentence, letter) => sentence += letter)
        }
        
        // Run and log the output
        const reduceOutput = reduceReverse(example)
        console.log("reduceReverse:", reduceOutput, "\n\n")
  
        /**
         * Beginner Reverses individual words using reduceReverse 
         */
        const reduceWordsBeginner = str => {
            // Convert the words to arrays
            const words = str.split(' ')
        
            return words.reduce((newSentence, word) => {
                console.log(`Sending "${word}" to be reversed`)
                return newSentence += reduceReverseBeginner(word) + ' '
            }, '')
        }
        // Run and log the output - Uncomment to run
        const reduceWordsBeginnerOutput = reduceWordsBeginner(example)
        console.log("reduceWordsBeginner:", reduceWordsBeginnerOutput, "\n\n")
  
        /**
         * Advance Reverses individual words using reduceReverse
         */
        const reduceWords = str => {
            return str.split(' ')
            .reduce((newSentence, word) => newSentence += reduceReverse(word) + ' ', '')
        }
        
        // Run and log the output
        const reduceWordsOutput = reduceWords(example)
        console.log("reduceWords:", reduceWordsOutput, "\n\n")