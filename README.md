# Family-Relations
class person has name, gender, parent, and generation. Generation is not an input but calculated.  
people (  
    John, 1, none, 0  
    Paul, 1, John, 1  
    Cale, 1, John, 1  
    Jess, 1, John, 1  
    Martha, 0, Paul, 2  
    Steve, 1, Paul, 2  
    Jeff, 1, Cale, 2  
    Mike, 1, Cale, 2  
    Darth Vader, 1, Cale, 2  
    Heck, 0, Jess, 2  
    Perry, 1, Jess, 2  
    Luke Skywalker, 1, Darth Vader, 3  
    add more people  
)  
### Position calculation  
find generation of parent and add 1 to find generation of new person.  

## Check lineage function  
inputs(person A, person B)  
let gen1 = person A generation  
let gen2 = person B generation  
let parent1 = person A parent  
let parent2 = person B parent  
let gendiff = gen1 - gen2  

###### Same generation  
if gendiff == 0  
{possible relations are simbling, cousin, self}  
    if parent1 == parent2  
    {possible relations are sibling, self}  
        if person A name == person B name  
        return {relation is self}  
        else  
        return {relation is sibling}  
    else  
    return {relation is cousin}  

###### Person A is later generation  
else if gendiff < 0  
{possible relations are child, nephew/niece, grandchild, great ... grandchild}  
    if gendiff == -1  
    {possible relations are child, nephew/niece}  
        if parent1 == person B name  
        return {relation is child}  
        else  
            if person A gender == 0  
            return {relation is niece}  
            else  
            return {relation is nephew}  
    else  
    {possible relations are grandchild, great ... grandchild}  
    return {relation is (# of greats = -gendiff - 2) grandchild}  

###### Person A is earlier generation  
else if gendiff > 0  
{possible relations are parent, uncle/aunt, grandparent, great ... grandparent}  
    if gendiff == 1  
    {possible relations are parent, uncle/aunt}  
        if parent2 == person A name  
        return {relation is parent}  
        else  
            if person B gender == 0  
            return {relation is aunt}  
            else  
            return {relation is uncle}  
    else  
    {possible relations are grnadparent, great ... grandparent}  
    return {relation is (# of great = gendiff - 2) grandparent}  


# main  
create empty array  
push the list of new people into array  
print the names of everyone (figure out a sensible way to present family tree)  
pick random between 0 and length of array twice, save person at array at random number to variables. Check lineage function  
print results  