export default class WorkoutTracker {
    constructor (root) {
         this.root = root;
         this.root.insertAdjacentHTML("afterbegin", WorkoutTracker.html());
    }
    
    static html() {
        return `
        <table class="tracker">
        <thead>
            <tr>
                <th>Date</th>
                <th>Workout</th>
                <th>Duration</th>
                <th></th>
            </tr>
        </thead>
        <tbody class="tracker__entries">
          
        </tbody>
        <tbody>
            <tr class="tracker__row tracker__row--add"></tr>
            <td colspan="4">
                <span class="tracker__add">Add Entry &plus;</span>
            </td>
        </tbody>
    </table>
        `;      
    }
}