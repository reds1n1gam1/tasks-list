const arr: number []= [0 ,4, 8, 4, 3, 5, 6, 7, 1,3,4,7,9 ];

// option 1
function foundIs(arr: number[]): void {
    for (const i in arr) {
        for(const s in arr ) {
            if( arr[i] + arr[s] === 5) {
                console.log("FOund numbers is "+ arr[i] + " and " + arr[s]);
                return;
            }
        }
    }
}

foundIs(arr)

//option 2
function foundIsFive2(arr: number []) {
    const NUMBER_TO_CHECK = 5;
    const mapForValues: Map<number, number> = new Map();

    for (const i in arr) {
        if( mapForValues.has(arr[i]) ) {
            console.log(`Found numbers is  ${arr[i]} and ${mapForValues.get(arr[i])}` )
            return;
        } else {
            const key = NUMBER_TO_CHECK - arr[i];
            mapForValues.set( key ,arr[i] )
        }
    }
}

foundIsFive2(arr);

/*
def found_is_five2(arr: list[int]) -> None:
    data = dict()
    for i in arr:
        if i in data:
            print(data[i], i)
        data[5 - i] = i
  */