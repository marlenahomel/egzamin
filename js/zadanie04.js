document.addEventListener("DOMContentLoaded", () => {

    //1 Szukanie nazw tagów
    const sampleClassArray = document.getElementsByClassName("sample_class");
    function getTagsofElements(elements) {
        let array1 = [];
        for (let i = 0; i < elements.length; i++)
            array1.push(elements[i].tagName);
        return array1;
    }
    console.log(getTagsofElements(sampleClassArray));

    //2 Szukanie nazw klas
    const sampleID = document.getElementById("sample_id");
    function getClassesOfElement(element) {
        let array2 = [];
        array2 = element.className.split(" ");
        return array2;
    }
    console.log(getClassesOfElement(sampleID));


    //5 Szukanie tagów dzieci
    const childrenOfSampleClass3 = document.getElementsByClassName("sample_class_3")[0].children;
    console.log(getTagsofElements(childrenOfSampleClass3));
})