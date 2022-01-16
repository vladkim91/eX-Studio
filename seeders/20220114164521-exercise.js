'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exercises = [
      {
        name: 'Bench press',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 135,
        type: 'equipment'
      },
      {
        name: 'Push up',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Dips',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Incline bench press',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 95,
        type: 'equipment'
      },
      {
        name: 'Cable Rope Tricep Pushdown',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 60,
        type: 'equipment'
      },
      {
        name: 'Overhead Extension',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: 1,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 25,
        type: 'equipment'
      },
      {
        name: 'Bench Dip',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: 1,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Barbell Deadlift',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 5,
        weight: 155,
        type: 'equipment'
      },
      {
        name: 'Kettlebell Deadlift',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 52,
        type: 'equipment'
      },
      {
        name: 'Lying Triceps Extension',
        muscle_group: 'tr',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 60,
        type: 'equipment'
      },
      {
        name: 'Pull up',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 7,
        weight: 0,
        type: 'equipment'
      },
      {
        name: 'Lat Pulldown',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 40,
        type: 'equipment'
      },
      {
        name: 'Bent-Over Row',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 45,
        type: 'equipment'
      },
      {
        name: 'Hammer Curl',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 30,
        type: 'equipment'
      },
      {
        name: 'Chin-up',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 4,
        reps: 5,
        weight: 0
      },
      {
        name: 'Barbell Curl',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 35,
        type: 'equipment'
      },
      {
        name: 'Cable Curl',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 50,
        type: 'equipment'
      },
      {
        name: 'Crunch',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 10,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Russian Twist',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        time: 30,
        type: 'bodyweight'
      },
      {
        name: 'Bicycle Crunches',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        time: 30,
        type: 'bodyweight'
      },
      {
        name: 'Leg raises',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Plank',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        time: 30,
        type: 'bodyweight'
      },
      {
        name: 'Dumbbell overhead press',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 25,
        type: 'equipment'
      },
      {
        name: 'Military press',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 70,
        type: 'equipment'
      },
      {
        name: 'Bottoms-Up Kettlebell Press',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 25,
        type: 'equipment'
      },
      {
        name: 'Lateral raise',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 20,
        type: 'equipment'
      },
      ,
      {
        name: 'Heavy squats',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 70,
        type: 'equipment'
      },
      ,
      {
        name: 'Bodyweight squat',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 4,
        reps: 10,
        weight: 0,
        type: 'bodyweight'
      },
      ,
      {
        name: 'Lunges',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight'
      },
      ,
      {
        name: 'Calf raises',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 20,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Kettlebell Swings',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 10,
        weight: 25,
        type: 'equipment'
      },
      {
        name: 'Burpees',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Jump lunges',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 0,
        type: 'bodyweight'
      },
      {
        name: 'Box jumps',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 5,
        weight: 0,
        type: 'equipment'
      }
    ];
    await queryInterface.bulkInsert('exercises', exercises);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises', exercises);
  }
};
